### Table of Contents

-   [Notification Service](#notification-service)
-   [Auth Service](#auth-service)
-   [History Service](#history-service)
-   [Todo Service](#todo-service)

---

### Notification Service

**Package**: `teddy.todos.notification`

This service manages user notifications, including retrieving, subscribing to real-time updates, and marking notifications as read.

#### Types

-   **Notification**
    -   `id` (`string`): Unique identifier for the notification.
    -   `message` (`string`): Content of the notification.
    -   `type` (`string`): Type/category of the notification.
    -   `isRead` (`string`): Read status of the notification ("true" or "false").

#### Messages

-   **SubscribeToNotificationsRequest**

    -   `userId` (`string`): Identifier for the user subscribing to notifications.

-   **GetNotificationsRequest**

    -   `userId` (`string`): Identifier for the user retrieving notifications.

-   **GetNotificationsResponse**

    -   `notifications` (`repeated Notification`): List of `Notification` objects for the user.

-   **SetReadRequest**
    -   `id` (`string`): Identifier for the notification.
    -   `isRead` (`bool`): Read status to be set (`true` or `false`).

#### Service Methods

-   **SubscribeToNotifications**

    -   **Request**: `SubscribeToNotificationsRequest`
    -   **Response**: Stream of `Notification` objects
    -   **Description**: Subscribes the user to real-time notifications.

-   **GetNotifications**

    -   **Request**: `GetNotificationsRequest`
    -   **Response**: `GetNotificationsResponse`
    -   **Description**: Retrieves all notifications for a specified user.

-   **SetRead**
    -   **Request**: `SetReadRequest`
    -   **Response**: `Notification`
    -   **Description**: Updates the read status of a specific notification.

---

### Auth Service

**Package**: `teddy.todos.auth`

This service manages user authentication, specifically handling login.

#### Messages

-   **LoginRequest**

    -   `email` (`string`): User's email address.
    -   `password` (`string`): User's password.

-   **LoginResponse**
    -   `id` (`string`): Unique identifier for the user.
    -   `email` (`string`): User's email address.
    -   `username` (`string`): Username of the user.
    -   `token` (`string`): JWT token for authenticated access.
    -   `role` (`string`): Role of the user (e.g., admin, user).

#### Service Methods

-   **Login**
    -   **Request**: `LoginRequest`
    -   **Response**: `LoginResponse`
    -   **Description**: Authenticates the user with provided credentials and returns user details along with a JWT token.

---

### History Service

**Package**: `teddy.todos.history`

This service manages the user’s action history, including creating and retrieving histories.

#### Types

-   **History**
    -   `id` (`string`): Unique identifier for the history entry.
    -   `title` (`string`): Title of the history action.
    -   `action` (`string`): Description of the action performed.
    -   `createdAt` (`string`): Timestamp of when the action was created.

#### Messages

-   **GetHistoryRequest**

    -   `userId` (`string`): Identifier for the user retrieving a specific history.

-   **GetHistoryResponse**

    -   `history` (`History`): Single `History` object.

-   **GetHistoriesRequest**

    -   `userId` (`string`): Identifier for the user retrieving all history entries.

-   **GetHistoriesResponse**

    -   `histories` (`repeated History`): List of `History` objects for the user.

-   **PutHistoryRequest**

    -   `userId` (`string`): Identifier for the user adding a history entry.
    -   `action` (`string`): Description of the action being recorded.

-   **PutHistoryResponse**
    -   `history` (`History`): Newly created `History` object.

#### Service Methods

-   **GetHistory**

    -   **Request**: `GetHistoryRequest`
    -   **Response**: `GetHistoryResponse`
    -   **Description**: Retrieves a specific history entry for the user.

-   **GetHistories**

    -   **Request**: `GetHistoriesRequest`
    -   **Response**: `GetHistoriesResponse`
    -   **Description**: Retrieves all history entries for a specified user.

-   **PutHistory**
    -   **Request**: `PutHistoryRequest`
    -   **Response**: `PutHistoryResponse`
    -   **Description**: Creates a new history entry for the user.

---

### Todo Service

**Package**: `teddy.todos.todo`

This service allows users to manage their to-do items, including creating, updating, retrieving, and marking them as completed.

#### Types

-   **Todo**
    -   `id` (`string`): Unique identifier for the to-do item.
    -   `title` (`string`): Title of the to-do item.
    -   `description` (`string`): Description of the to-do item.
    -   `isCompleted` (`bool`): Completion status of the to-do item.
    -   `dueDate` (`string`): Due date for the to-do item.

#### Messages

-   **GetTodoRequest**

    -   `id` (`string`): Identifier for the to-do item being retrieved.

-   **GetTodoResponse**

    -   `todo` (`Todo`): Single `Todo` object.

-   **GetTodosRequest**

    -   `userId` (`string`): Identifier for the user retrieving all to-do items.

-   **GetTodosResponse**

    -   `todos` (`repeated Todo`): List of `Todo` objects for the user.

-   **PutTodoRequest**

    -   `title` (`string`): Title of the new to-do item.
    -   `description` (`string`): Description of the new to-do item.
    -   `dueDate` (`string`): Due date for the new to-do item.
    -   `isCompleted` (`bool`): Completion status of the new to-do item.

-   **PutTodoResponse**

    -   `status` (`int32`): Status code indicating success or failure of the to-do creation.

-   **SetIsCompletedRequest**
    -   `id` (`string`): Identifier for the to-do item.
    -   `isCompleted` (`bool`): New completion status for the to-do item.

#### Service Methods

-   **GetTodo**

    -   **Request**: `GetTodoRequest`
    -   **Response**: `GetTodoResponse`
    -   **Description**: Retrieves details of a specific to-do item by its ID.

-   **GetTodos**

    -   **Request**: `GetTodosRequest`
    -   **Response**: `GetTodosResponse`
    -   **Description**: Retrieves all to-do items for a specified user.

-   **PutTodo**

    -   **Request**: `PutTodoRequest`
    -   **Response**: `PutTodoResponse`
    -   **Description**: Creates a new to-do item.

-   **SetIsCompleted**
    -   **Request**: `SetIsCompletedRequest`
    -   **Response**: `Todo`
    -   **Description**: Updates the completion status of a specified to-do item.
