package main

import (
	"fmt"
	"gtd/config"
	"net/http"
	_ "net/http/pprof"
	"path/filepath"
	"template-project-react/src/lib/controllers"

	"go-tfts"
)

func main() {
	configPath, _ := filepath.Abs("./src/lib/config")

	config.Load(configPath)

	baseURI := config.String("server.baseUri")
	docRoot := config.String("server.docRoot")

	pc := controllers.NewPeopleController()

	router := rest.DefaultRouter().RouteMap(
		rest.NewRoute().Named("people").For(baseURI+"/people").With("GET", pc.GetAllPeople).And("POST", pc.CreatePerson),
		rest.NewRoute().Named("person").For(baseURI+"/people/{id:i}").With("GET", pc.GetPerson),
	)

	handler := rest.NewHandler(router)

	// handler.AddInterceptor(func(c rest.Context) bool {
	// 	fmt.Println(c.Route.Params)
	//
	// 	return true
	// })
	//
	handler.AddInterceptor(func(c rest.Context) bool {
		fmt.Println(c.Request.UserAgent())

		return true
	})

	http.Handle(baseURI+"/", handler)
	http.Handle("/", http.FileServer(http.Dir(docRoot)))
	http.ListenAndServe(":8080", nil)
}
