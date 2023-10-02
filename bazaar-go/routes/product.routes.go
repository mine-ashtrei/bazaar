package routes

import (
	"bazaar-go/controllers"

	"github.com/gin-gonic/gin"
)

type ProductRouteController struct {
	productController controllers.ProductController
}

func NewProductRouteController(productController controllers.ProductController) ProductRouteController {
	return ProductRouteController{productController}
}

func (pc *ProductRouteController) ProductRoute(rg *gin.RouterGroup) {

	router := rg.Group("products")
	//router.Use(middleware.DeserializeUser())
	router.POST("/", pc.productController.CreateProduct)
	router.GET("/", pc.productController.FindProducts)
	router.PUT("/:productId", pc.productController.UpdateProduct)
	router.GET("/:productId", pc.productController.FindProductById)
	router.DELETE("/:productId", pc.productController.DeleteProduct)
}
