package models

import (
	"bazaar-go/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// maybe rename it to session
type Token struct {
	ID              uint       		`gorm:"primary_key"`
	UserID          uuid.UUID       `gorm:"not null"`
	User            User       		`gorm:"foreignkey:UserID;not null"`
	AccessToken     string     		`gorm:"not null"`
	RefreshToken    string     		`gorm:"not null"`
	ExpirationTime  time.Time  		`gorm:"not null"`
}

type TokenHeader struct {
	AccessToken  string
}

type TokenPayload struct {
	UserID       uuid.UUID
}

type TokenResponse struct {
	AccessToken	 string     `json:"access_token"`
	RefreshToken string     `json:"refresh_token"`
}

func (token *Token) BeforeCreate(tx *gorm.DB) (err error) {
	token.AccessToken = utils.HashToken(token.AccessToken)
	token.RefreshToken = utils.HashToken(token.RefreshToken)
	return
}

