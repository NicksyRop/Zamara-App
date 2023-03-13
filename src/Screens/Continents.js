import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { createClient } from "react-native-soap-request";

const CONTINENT_WSDL =
  "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

const Continents = () => {
  const [continents, setContinents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = createClient({
      wsdl: CONTINENT_WSDL,
      headers: {
        "User-Agent": "react-native",
      },
    });

    client
      .request("ListOfContinentsByName", {
        sCountryISOCode: "",
      })
      .then((response) => {
        const continentList =
          response.body.ListOfContinentsByNameResponse
            .ListOfContinentsByNameResult.tContinentCodeAndName;
        if (continentList) {
          setContinents(
            continentList.map((c) => ({
              code: c.sCode,
              name: c.sName,
            }))
          );
        } else {
          setError("No continents found in response from SOAP API.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching continents from SOAP API.");
      });
  }, []);

  return (
    <View>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <View>
          {continents.map((continent) => (
            <Text key={continent.code}>{continent.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Continents;
