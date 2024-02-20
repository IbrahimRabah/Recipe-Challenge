# Angular Project

This project is an Angular application structured with modules to organize features and functionality effectively. It follows Angular best practices and includes modules such as Core and Shared for essential functionalities and reusable components.

## Project Structure

The project is structured into modules, each serving a specific purpose:

- **Core Module**:
  - The Core module serves as a container for essential features and functionalities required for the application's core operations. It includes singleton services, enums, guards, interceptors, and models.
  - For detailed usage information on each file within the Core module, please refer to the README files inside each subdirectory.

- **Modules**:
  - The Modules folder contains feature modules such as Recipe.
  - Inside the Recipe module, there are  folders:
    - `Components`: Contains components related to recipes, favorites, and recipe details.
    - `Services` : all method needed in recipe module
    - For detailed usage information on each component, please refer to the README files inside each component's directory.

- **Shared Module**:
  - The Shared module organizes reusable components, directives, pipes, services, and validation functionalities used across multiple feature modules.
  - For detailed usage information on each file within the Shared module, please refer to the README files inside each subdirectory.

## Additional Features
- **Lazy Loading**: Utilized to enhance performance by loading modules on demand.
- **TrackBy**: Implemented to optimize rendering performance when working with lists.





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
