package middleware

import (
	"bazaar-go/initializers"
	"bazaar-go/models"
	"bazaar-go/utils"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func getUserIdFromSub(sub interface{}) (string, error) {
	subMap, ok := sub.(map[string]interface{})
	if !ok {
		return "", fmt.Errorf("something bad happened")
	}

	userID, ok := subMap["UserID"].(string)
	if !ok {
		return "", fmt.Errorf("something bad happened")
	}

	return userID, nil
}

func DeserializeUser() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var access_token string
		cookie, err := ctx.Cookie("access_token")

		authorizationHeader := ctx.Request.Header.Get("Authorization")
		fields := strings.Fields(authorizationHeader)

		if len(fields) != 0 && fields[0] == "Bearer" {
			access_token = fields[1]
		} else if err == nil {
			access_token = cookie
		}

		if access_token == "" {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"status": "fail", "message": "You are not logged in"})
			return
		}

		config, _ := initializers.LoadConfig(".")
		sub, err := utils.ValidateToken(access_token, config.AccessTokenPublicKey)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"status": "fail", "message": err.Error()})
			return
		}

		var token models.Token
		if res := initializers.DB.First(&token, "access_token = ?", utils.HashToken(access_token)); res.Error != nil {	
			ctx.AbortWithStatusJSON(http.StatusForbidden, gin.H{"status": "fail", "message": "fatal"})
			return
		}
		
		var user models.User
		userId, err := getUserIdFromSub(sub)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusForbidden, gin.H{"status": "fail", "message": "fatal first"})
			return
		}
		if res := initializers.DB.First(&user, "id = ?", userId); res.Error != nil {
			ctx.AbortWithStatusJSON(http.StatusForbidden, gin.H{"status": "fail", "message": "fatal second"})
			return
		}
		if token.UserID != user.ID {
			ctx.AbortWithStatusJSON(http.StatusForbidden, gin.H{"status": "fail", "message": "the user belonging to this token no logger exists"})
			return
		}

		ctx.Set("currentUser", user)
		ctx.Next()
	}
}

