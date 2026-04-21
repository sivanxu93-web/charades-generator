/**
 * A robust Cloudflare KV client using REST API.
 */
export const kv = {
  getConfigs() {
    return {
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      namespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
      apiToken: process.env.CLOUDFLARE_API_TOKEN,
    };
  },

  async get(key: string): Promise<string | null> {
    const { accountId, namespaceId, apiToken } = this.getConfigs();
    if (!accountId || !namespaceId || !apiToken) {
      console.error("[KV] Missing configuration variables");
      return null;
    }

    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`;
    
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${apiToken}` },
        cache: 'no-store'
      });

      if (response.status === 404) return null;
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[KV GET Error] Key: ${key}, Status: ${response.status}, Detail: ${errorText}`);
        return null;
      }

      return await response.text();
    } catch (e) {
      console.error("[KV GET Exception]", e);
      return null;
    }
  },

  async set(key: string, value: string, expirationTtl?: number): Promise<boolean> {
    const { accountId, namespaceId, apiToken } = this.getConfigs();
    if (!accountId || !namespaceId || !apiToken) {
      console.error("[KV] Missing configuration variables during SET");
      return false;
    }

    let url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`;
    if (expirationTtl) {
      url += `?expiration_ttl=${expirationTtl}`;
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "text/plain",
        },
        body: value,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[KV SET Error] Key: ${key}, Status: ${response.status}, Detail: ${errorText}`);
        return false;
      }

      return true;
    } catch (e) {
      console.error("[KV SET Exception]", e);
      return false;
    }
  },
};
