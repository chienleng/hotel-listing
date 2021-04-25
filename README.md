# Hotel Listing

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Run tests
```
yarn test:unit
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Dev notes

Since I only want to spend no more than four hours on this, my approach is to quickly setup the basic Vue/vuex structure and vue's test-utils. My weaker skillset is approaching and writing tests, so I wrote out the things I will need to test for and decided to work on that after the components are almost done.

To begin, I look at the mockup and the data to get an idea of what components are needed, how the basic html structure will look like, and identify the complex components. The two main features listed in your instructions are sorting and star ratings. Sorting should be easy. The star rating component is definitely more complex and could take up more of the dev time if I am not careful. Therefore, my first coding work is to quickly do a quick and dirty rating component. The idea here is not to make it look/work exactly the same, but to figure out how I will approach making it. 

Once I feel confident about all aspects of this development, then i write down the tasks (in order of implementation):
* setup store
* fetch data.json, process and store results
* create placeholder components to accept props
* implement sorting
* match styles with mockup
* implement rating component
* write tests for rating component
* write tests for sorting function in store
* write tests for any component that is dynamic

And gradually tick them off as I go.

Further improvements:
I think more can be done refactoring and validating the data structure, i.e. `cancellationOption.cancellationType` should be validated.




