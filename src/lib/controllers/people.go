package controllers

import (
	"log"

	"go-tfts"
)

type Person struct {
	Name        string `json:"name"`
	Occupation  string `json:"occupation"`
	Description string `json:"description"`
	Photo       string `json:"photo"`
}

type People struct {
	GetAllPeople rest.ControllerAction
	GetPerson    rest.ControllerAction
	CreatePerson rest.ControllerAction
}

func NewPeopleController() People {
	people := People{}

	people.GetAllPeople = func(hb rest.HttpBundle) rest.ResponseSender {
		persons := []Person{
			Person{"Moe", "Awesome Software Engineer", "Unde laudantium temporibus nostrum autem deserunt? Optio, enim repellat. Molestiae?", "moe.png"},
			Person{"Larry", "Designer & Developer", "Odit nobis cupiditate velit, doloribus ullam fugiat placeat totam perferendis.", "larry.png"},
			Person{"Curly", "Software Engineer, Ferret Owner", "Quidem, obcaecati, aliquam! Hic, veritatis dolorem omnis adipisci iusto, laudantium!", "curly.png"},
		}
		return rest.NewGzipResponse(rest.NewOKJsonResponse(persons))
	}

	people.GetPerson = func(hb rest.HttpBundle) rest.ResponseSender {
		pArr := []Person{
			Person{"Moe", "Awesome Software Engineer", "Unde laudantium temporibus nostrum autem deserunt? Optio, enim repellat. Molestiae?", "moe.png"},
			Person{"Larry", "Designer & Developer", "Odit nobis cupiditate velit, doloribus ullam fugiat placeat totam perferendis.", "larry.png"},
			Person{"Curly", "Software Engineer, Ferret Owner", "Quidem, obcaecati, aliquam! Hic, veritatis dolorem omnis adipisci iusto, laudantium!", "curly.png"},
		}
		index := hb.RouteParams()["id"].(int) - 1

		var resp rest.BasicResponse

		if index >= len(pArr) {
			resp = rest.NewNotFoundResponse()
		} else {
			resp = rest.NewOKJsonResponse(pArr[index])
		}
		return resp
	}

	people.CreatePerson = func(hb rest.HttpBundle) rest.ResponseSender {
		var person Person
		err := hb.BindJsonEntity(&person)

		if err != nil {
			log.Println(err)
		}
		return rest.NewCreatedJsonResponse(person)
	}

	return people
}
