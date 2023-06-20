Nudge API Documentation
Base URL: /api/v1/app

API ENDPOINTS:

Create a Nudge
Endpoint: /nudge
Method: POST
Description: Creates a new nudge for an event.
Request Payload:

1.  title (string): The title of the nudge.
2.  image (file): The image file for cover.
3.  sendTime (string): The time at which the nudge should be sent.
4.  description (string): The description of the nudge.
5.  icon (string): The icon to be displayed with the nudge.
6.  invitation (string): The invitation text for the nudge.
7.  Response: The created nudge object with an id.

Retrieve a Nudge:
Endpoint: /nudges/:id
Method: GET
Description: Retrieves a specific nudge by its ID.
Response: The nudge object matching the ID.

Update a Nudge
Endpoint: /nudges/{id}
Method: PUT
Description: Updates an existing nudge with new data.
Request Payload:
Any or all of the fields mentioned in the create payload.
Response: The updated nudge object.

Delete a Nudge
Endpoint: /nudges/{id}
Method: DELETE
Description: Deletes a nudge by its ID.
Response: Success message indicating the deletion.

OBJECT:
{
eventId: String, // ID of the tagged event
title: String, // Title of the nudge
image: String, // URL
sendTime: Date, // Time at which the nudge should be sent
description: String, // Description of the nudge
icon: String, // URL
invitation: String // invitation for the nudge
}
