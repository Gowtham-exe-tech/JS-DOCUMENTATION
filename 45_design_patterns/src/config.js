// SINGLETON: only one config object for the whole app
class AppConfig {
  static instance = null;
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;
    // frozen so no module can change it by mistake (singleton can become global mutable state)
    this.settings = Object.freeze({ apiBaseUrl: '/api', requestTimeout: 10000, maxRetries: 3, minAge: 18, maxAge: 100 });
    AppConfig.instance = this;
  }
  get(key) { return this.settings[key]; }
}
// note: ES modules are cached, so this export alone already gives a shared instance
export const config = new AppConfig();
export { AppConfig };
