```markdown
# Dharmsinh Desai University (DDU) Student Data API

An API built with Express.js to retrieve student data for specific roll numbers at Dharmsinh Desai University (DDU). Simply query by roll number to get detailed information about individual students.

## Base URL

The base URL for this API is: https://ddu-student-data-api.vercel.app/find/:rollNumber


## Endpoints

### 1. Find Student Data by Roll Number

Fetches data for a student by roll number.

- **Endpoint:** `/find/:rollnumber`
- **Method:** `GET`
- **Example Request:** `https://ddu-student-data-api.vercel.app/find/80`

#### Parameters

| Parameter     | Type     | Description                                           |
|---------------|----------|-------------------------------------------------------|
| `rollnumber`  | `number` | The roll number of the student (range: 1 to 158)      |

#### Response

Returns student data in JSON format if the roll number is within the specified range (1 to 158).

#### Example Response

```json
{
  "name": "REDACTED",
  "rollnumber": 80,
  "id": "REDACTED"
}
```

## Usage

Replace `:rollnumber` in the endpoint with the desired roll number to retrieve data for that student.

Example: 

```bash
curl https://ddu-student-data-api.vercel.app/find/80
```

## Notes

- **Roll Number Range:** 1 to 158.

## Technologies Used

- **Backend:** Express.js
- **Hosting:** Vercel


## Contact

For any questions or further information, feel free to reach out:

- **Email:** [satyamprajapati1979@gmail.com](mailto:satyamprajapati1979@gmail.com)
- **WhatsApp:** [Message on WhatsApp](https://wa.me/918511477882)
```

Let me know if you'd like more customization or if there's anything else you need!

## License

This project is licensed under the MIT License.
```

Let me know if there are any other details you'd like to adjust!
