/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as labourActions from 'app/store/actions/labourActions';
import styles from './styles';
import { LabourDetails } from 'app/components/LabourDetails';
import { LabourCard } from 'app/components/LabourCard';

const Home: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [laboursList, setLaboursList] = useState([]);
  const [searchText, setSearchText] = useState(false);

  const dispatch = useDispatch();
  const laboursData = useSelector(
    (state: any) => state.labourListReducer.laboursData,
  );

  const isLoading = useSelector((state: any) => state.loadingReducer.isLoading);

  useEffect(() => {
    dispatch(labourActions.requestLabourList());
  }, []);

  useEffect(() => {
    setLaboursList(laboursData);
  }, [laboursData]);

  useEffect(() => {
    if (searchText) {
      let tempData =
        laboursData?.length > 0 &&
        laboursData.filter((item: any) => {
          return item?.name?.indexOf(searchText) !== -1;
        });
      setLaboursList(tempData);
    } else {
      setLaboursList(laboursData);
    }
  }, [searchText]);

  const showLabourDetails = () => {
    setShowDetails(true);
  };

  const renderItem = (item: any) => {
    return <LabourCard item={item} onPress={showLabourDetails} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Labours</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Search"
        placeholderTextColor={'grey'}
        onChangeText={(txt: any) => setSearchText(txt)}
      />
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.gamesListContainer}
          contentContainerStyle={styles.itemContainer}
          data={laboursList}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
      <LabourDetails
        showModal={showDetails}
        onClose={() => setShowDetails(false)}
        data={laboursData}
      />
    </SafeAreaView>
  );
};

export default Home;
