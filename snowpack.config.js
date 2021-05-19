module.exports = {
  mount:{
    public: '/',
    src: '/dist/'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-sass'
  ],
  alias: {
    '~': './src',    
  },
  devOptions: {
    //port: 8080 // snowpack 기본 포트
    open: 'none' // 개발서버 열 때 브라우저 자동 열림 방지
  }
}