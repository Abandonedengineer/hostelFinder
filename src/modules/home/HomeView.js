import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView
} from 'react-native';
import theme from '../../components/constants/Theme';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import ListItem from '../../components/ListItem';
import { Button, RadioGroup, Dropdown } from '../../components';
import Icon from 'react-native-vector-icons/Entypo';



export default function HomeScreen(props) {

  const isAgent = true
  const hostelData = [props.data[1], props.data[0]]
  const _openArticle = article => {
    props.navigation.navigate({
      routeName: 'Details',
      params: { ...article, isAgent: isAgent },
    });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => _openArticle(item)}
    >
      <ListItem item={item} />
    </TouchableOpacity>
  );
  if (!isAgent && props.data.length > 0) {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${item.id}`
              : `${item[0] && item[0].id}`
          }
          style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
          data={props.data}
          renderItem={renderItem}
        />
      </View>
    );
  } else if (isAgent && hostelData.length == 0) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.componentsSection}>
          <Text style={styles.componentSectionHeader}>No Hostels to Display</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
            <Button
              style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
              primary
              bordered
              // propscolor={theme.COLORS.INFO}
              // textColor={theme.COLORS.INFO}
              caption="Add Hostel"
              onPress={() => { }}
            />
          </View>
        </View>
      </ScrollView>
    )
  } else if (isAgent && hostelData.length > 0) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.container}>
          <FlatList
            keyExtractor={item =>
              item.id
                ? `${item.id}`
                : `${item[0] && item[0].id}`
            }
            style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
            data={hostelData}
            renderItem={renderItem}
          />
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
            <Button
              style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
              primary
              bordered
              // propscolor={theme.COLORS.INFO}
              // textColor={theme.COLORS.INFO}
              caption="Add Hostel"
              onPress={() => { props.navigation.navigate('AddHostel') }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    flex: 1
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 400,
    alignSelf: 'center'
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
});
