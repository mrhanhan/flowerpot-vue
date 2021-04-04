import {defineMock} from "@/mock/utils";


defineMock('/api/test', "get", function () {
    console.log('Hello World');
    return 'Hello World';
});
