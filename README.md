## Github contributions calendar API

Simple api to extract data from contributions calendar:
As far as I know github doesn't provide such api so I decided to do it myself.

Check live demo at http://github-calendar.herokuapp.com/

- /commits/:user - returns array with number of commits everyday
- /total/:user - returns total number of commits this year
- /commits/last/:user - returns number of commits for last 31 days

Response format: JSON

### Example request:
GET http://github-calendar.herokuapp.com/commits/kadw

### Example response:
```
{"data":[0,0,0,1,2,0,1,0,0,0,0,0,1,1,2,0,0,1,1,2,0,1,0,1,2,1,0,0,0,1,1,1,1,0,1,2,4,0,0,0,1,0,0,0,0,0,2,0,3,0,4,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,2,1,0,1,1,0,2,2,1,3,1,0,0,0,1,0,0,0,0,2,0,3,0,0,0,0,0,2,1,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,4,8,10,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,5,0,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
```