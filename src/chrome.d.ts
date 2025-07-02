declare namespace chrome {
  namespace runtime {
    function getURL(path: string): string;
    const id: string;
    function getManifest(): chrome.runtime.Manifest;

    interface Manifest {
      name?: string;
      version?: string;
      manifest_version: number;
      description?: string;
      icons?: { [key: string]: string };
      permissions?: string[];
      [key: string]: any;
    }
  }
}
