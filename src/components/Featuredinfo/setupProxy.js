let proxy=require("http-proxy-middleware")

module.exports=function(app){
    app.use(
        proxy("/api/admin",{
            target:"http://127.0.0.1:5000",
            secure:false,
            changeOrigin:true
        })
    )
    app.use(
        proxy("/api/getanimals",{
            target:"http://127.0.0.1:5000",
            secure:false,
            changeOrigin:true
        })
    )
}