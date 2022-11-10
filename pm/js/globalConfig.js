let endEnv = 0; // 生产 - 0， 本地 - 1
const GlobalConfig = {
  secretIv: "1234567890123456", // 密钥偏移量
  secretKey: "IWPAX9g6oEe1rLas", // 密钥
  //度量平台地址
  DASHBOARD_URL: [
    "/dashboard/login",
    "https://rdtest.onewo.com/dashboard/login"
  ][endEnv],
  environ: 1, // 生产环境 - 1， 测试环境 - 2
};

window.GlobalConfig = GlobalConfig;
