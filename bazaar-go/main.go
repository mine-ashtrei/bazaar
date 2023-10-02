package main

import (
	"bazaar-go/controllers"
	db "bazaar-go/initializers"
	initializers "bazaar-go/initializers"
	"bazaar-go/routes"
	"log"
	"net/http"

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

	db.ConnectDB(&config)

	AuthController = controllers.NewAuthController(db.DB)
	AuthRouteController = routes.NewAuthRouteController(AuthController)

	UserController = controllers.NewUserController(db.DB)
	UserRouteController = routes.NewUserRouteController(UserController)

	ProductController = controllers.NewProductController(db.DB)
	ProductRouteController = routes.NewProductRouteController(ProductController)

	server = gin.Default()

}

func main() {

	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load environment variables", err)
	}

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
