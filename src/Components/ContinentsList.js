import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { soap } from "react-native-soap";

export default function ContinentsList() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    // create a SOAP client
    const client = soap.createClient(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL",
      {},
      // set the endpoint URL to the SOAP service
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso"
    );

    // call the ListOfContinentsByName operation
    client.ListOfContinentsByName({}, (err, res) => {
      if (err) console.error(err);
      else {
        // extract the continents from the SOAP response
        const { tContinent } = res.ListOfContinentsByNameResult;

        // map the continents to an array of objects with code and name properties
        const continentList = tContinent.map(({ sCode, sName }) => ({
          code: sCode,
          name: sName,
        }));

        // set the continents state variable
        setContinents(continentList);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {continents.map(({ code, name }) => (
        <View key={code} style={styles.continent}>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  continent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  code: {
    fontWeight: "bold",
    marginRight: 8,
  },
  name: {},
});
