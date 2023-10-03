package routes

import (
	"bazaar-go/controllers"
	"bazaar-go/middleware"

	"github.com/gin-gonic/gin"
)

type UserRouteController struct {
	userController controllers.UserController
}

func NewUserRouteController(userController controllers.UserController) UserRouteController {
	return UserRouteController{userController}
}

func (urc *UserRouteController) UserRoute(rg *gin.RouterGroup) {
	router := rg.Group("users")
	router.GET("/all", urc.userController.GetAllUsers)
	router.GET("/me", middleware.DeserializeUser(), urc.userController.GetMe)
}
