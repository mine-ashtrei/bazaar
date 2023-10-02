package models

import (
	"time"

	"github.com/google/uuid"
)

type Product struct {
	ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Name        string    `gorm:"not null" json:"name,omitempty"`
	Description string    `gorm:"not null" json:"description,omitempty"`
	Price       float32   `gorm:"not null" json:"price,omitempty"`
	MsrpPrice   float32
	Width       float32
	Height      float32
	Length      float32
	Stock       int
	Approved    bool
	Status      string
	Deleted     bool
	Image       string
	Business    uuid.UUID `gorm:"not null" json:"business,omitempty"`
	User        uuid.UUID `gorm:"not null" json:"user,omitempty"`
	Category    uuid.UUID `gorm:"not null" json:"category,omitempty"`
	CreatedAt   time.Time `gorm:"not null" json:"created_at,omitempty"`
	UpdatedAt   time.Time `gorm:"not null" json:"updated_at,omitempty"`
}

type ProductRequest struct {
	Name        string `json:"name"  binding:"required"`
	Description string `json:"description" binding:"required"`
	Price       string `json:"price" binding:"required"`
	Category    string `json:"category" binding:"required"`
	Image       string `json:"image" binding:"required"`
}
