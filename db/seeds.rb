# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# sample data from Amadaeus
# {
#     "data": [
#       {
#         "chainCode": "KG",
#         "iataCode": "ORF",
#         "dupeId": 700119138,
#         "name": "KNIGHTS INN VIRGINIA BEACH LYN",
#         "hotelId": "KGORF732",
#         "geoCode": {
#           "latitude": 36.81181,
#           "longitude": -76.06908
#         },
#         "address": {
#           "countryCode": "US"
#         },
#         "distance": {
#           "value": 3.31,
#           "unit": "KM"
#         }
#       },
#       {
#         "chainCode": "DT",
#         "iataCode": "ORF",
#         "dupeId": 700036161,
#         "name": "DOUBLETREE BY HILTON VIRGINIA BEACH",
#         "hotelId": "DTORFH64",
#         "geoCode": {
#           "latitude": 36.84474,
#           "longitude": -75.99332
#         },
#         "address": {
#           "countryCode": "US"
#         },
#         "distance": {
#           "value": 4.46,
#           "unit": "KM"
#         }
#       }
#     ],
#     "meta": {
#       "count": 2,
#       "links": {
#         "self": "http://test.api.amadeus.com/reference-data/locations/hotels/by-city?cityCode=NTU&hotelSource=ALL&radius=5&radiusUnit=KM"
#       }
#     }
#   }
