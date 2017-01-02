# dd
This project is a simple Angular 2 dashboard that use Spring Actuator REST API to monitor build status of Springboot application

# Maven Build configuration for Actuator

Srping Actuator needs 2 files to provide interesting informations about build to ddashboard.

First, you should configure your spring application build to generate the *git.properties* file and the maven build properties file.

To generate the *git.properties* file via Maven, you can add this dependency to your *pom.xml*

    <build>
      <plugins>
          <!-- Generate a git.properties file to provide build information for actuator -->
            <plugin>
              <groupId>pl.project13.maven</groupId>
              <artifactId>_git-commit-id-plugin</artifactId>
            </plugin>
      </plugins>
    </build>
	
To generate maven build properties file, you can add this dependency to your pom.xml

    <build>
      <plugins>
        <!-- Generate a file to provide build information for actuator -->
        <plugin>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-maven-plugin</artifactId>
          <executions>
            <execution>
              <goals>
                <goal>build-info</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
    
# actuator configuration

ddashboard use CORS Http requests to access Actuator API so we need to allow Spring to allow such requests

Add this configuration to the application.properties of yout springboot project

    # allow health endpoint to display dblink status and free disk space
    endpoints.health.sensitive=false
    endpoints.cors.allowed-origins=*
    endpoints.cors.allowed-methods=GET,POST
    # allow the info endpoint to display author of commit, date, etc...
    management.info.git.mode=full

# ddashboard


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
