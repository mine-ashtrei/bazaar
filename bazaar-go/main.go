package main

import (
	"bazaar-go/controllers"
	initializers "bazaar-go/initializers"
	"bazaar-go/routes"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var (
	server *gin.Engine

	AuthController      controllers.AuthController
	AuthRouteController routes.AuthRouteController

	UserController      controllers.UserController
	UserRouteController routes.UserRouteController

	ProductController      controllers.ProductController
	ProductRouteController routes.ProductRouteController
)

func init() {

	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("🚀 Could not load environment variables", err)
	}

	initializers.ConnectDB(&config)

	AuthController = controllers.NewAuthController(initializers.DB)
	AuthRouteController = routes.NewAuthRouteController(AuthController)

	UserController = controllers.NewUserController(initializers.DB)
	UserRouteController = routes.NewUserRouteController(UserController)

	ProductController = controllers.NewProductController(initializers.DB)
	ProductRouteController = routes.NewProductRouteController(ProductController)

	server = gin.Default()

}

func main() {

	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load environment variables", err)
	}

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:8000", config.ClientOrigin}
	corsConfig.AllowCredentials = true

	server.Use(cors.New(corsConfig))

	router := server.Group("/api")
	router.GET("/healthcheck", func(ctx *gin.Context) {
		message := "Health check"
		ctx.JSON(http.StatusOK, gin.H{"status": "success", "message": message})
	})

	AuthRouteController.AuthRoute(router)
	UserRouteController.UserRoute(router)
	ProductRouteController.ProductRoute(router)

	log.Fatal(server.Run(":" + config.ServerPort))
}
