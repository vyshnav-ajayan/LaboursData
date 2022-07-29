import React, { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as labourActions from 'app/store/actions/labourActions';
import metrics from 'app/config/metrics';
import { StarRating } from '../components/StarRating';
import { ProgressBar } from 'react-native-paper';
import { Button } from '../components/Button';

export const LabourDetails = ({ showModal, ...props }) => {
  const [currentRating, setCurrentRating] = useState(2);
  const totalRatings = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const laboursDetails = useSelector(
    (state: any) => state.labourListReducer.labourDetails,
  );

  useEffect(() => {
    dispatch(labourActions.requestLabourDetails());
  }, [dispatch]);

  return (
    <Modal transparent={true} visible={showModal} style={{ zIndex: 200 }}>
      <TouchableWithoutFeedback onPress={props.onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.headerText}>{laboursDetails.name}</Text>
        <Text style={styles.descriptionText}>{laboursDetails.description}</Text>
        <View style={styles.dataContainer}>
          <Text
            style={
              styles.labelText
            }>{`Quantity:    ${laboursDetails.quantity} hour`}</Text>
          <Text
            style={
              styles.labelText
            }>{`Start Date: ${laboursDetails.startDate}`}</Text>
          <Text
            style={
              styles.labelText
            }>{`End Date:   ${laboursDetails.endtDate}`}</Text>
        </View>
        <View style={styles.starRatingContainer}>
          <Text style={styles.subTitle}>Progress</Text>
          <ProgressBar
            progress={0.6}
            color={'#34ebbd'}
            style={styles.progressBarStyle}
          />
        </View>
        <View style={styles.starRatingContainer}>
          <Text style={styles.subTitle}>Feedback</Text>
          <StarRating
            currentRating={currentRating}
            onChangeRating={(item: any) => setCurrentRating(item)}
            totalRatings={totalRatings}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'APPROVE'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    minHeight: 100,
    width: metrics.screenWidth * 0.9,
    top: metrics.screenHeight * 0.2,
    right: metrics.screenWidth * 0.05,
    left: metrics.screenWidth * 0.05,
    padding: 20,
    borderRadius: 5,
  },
  dataContainer: {
    paddingTop: 25,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
  },
  descriptionText: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    paddingVertical: 5,
    color: 'grey',
  },
  labelText: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    color: 'grey',
  },
  starRatingContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  progressBarStyle: {
    height: 10,
    width: metrics.screenWidth * 0.8,
    borderRadius: 5,
    backgroundColor: 'grey',
    marginTop: 5,
  },
  buttonContainer: { marginTop: 15 },
});
