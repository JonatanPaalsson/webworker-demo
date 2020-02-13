# webworker-demo

This is a small demo of a webworker that sorts an array of 4 000 000 elements. Note that the array is created on the main thread and therefor the browser is locked during this time. However when the browser send the array to the web worker for sorting, then the browser unfreezes.
