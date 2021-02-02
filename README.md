# React Video Uploader TA

## Installation

1. Clone this repository
2. Run `npm run install:both` from the main folder (NOT inside of /client) to install front end and back end dependencies
3. After dependencies have been installed, run `npm start:both` to launch the application

## Using the Application

1. Fill in mandatory fields: upload video, title, start date, and start time
   - Location field is optional
   - Failure to properly fill a mandatory field will prevent progress to the part of the form and show the relevant validation message
   - Upload a video by clicking on "Browse" in the "Upload Video" field
     - For the sake of the demo, upload a relatively large video (over 100mb if possible) in the ".mp4" format
       - This will allow certain aspects of the upload process to be evaluated more easily
     - Click on "Remove File" when it appears to clear the video from the input field
2. Upon completion of step 1, click the "Next" button to advance to the "Terms and Condition" page
   - The terms and conditions (taken from a sample) are within a fixed-height container and can be scrolled
3. Tick the checkbox first and click on "Next" to advance to the last page
   - Failure to check the box will prevent progress and show a validation message upon clicking "Next"
   - Click the "Previous" button to go back to the first page
4. The final page should contain:
   - A summary of the details filled out in the first page
   - The upload button
5. Click on the upload button to start the upload. The following should happen
   - During upload:
     - A progress bar displays the percentage of the upload's completion in real-time
     - A button to cancel the upload (to disappear upon completion of the upload)
   - Upload success:
     - A success message at the top of the screen that disappears after a set amount of time
   - Upload failure:
     - A failure message at the top of the screen that disappears after a set amount of time
   - After upload success/failure:
     - A button that says "Upload another video", which takes user back to the first page and resets all fields
6. To check if the video was actually uploaded, open the "uploads" subfolder located within "/client"
   - The file path should be something like this:
   ```
   ta-videos-uploader
   |
   |___client
       |
       |___uploads
            |
            |__"uploadedFile.mp4"
   ```
