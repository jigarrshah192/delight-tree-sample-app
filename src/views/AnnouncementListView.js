import React from "react"
import { View, Image, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from "native-base";

import AppHeader from '../components/AppHeader'

export default class AnnouncementListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            membersCategory: props.route.params.selectedMembersCategory,
            announcementTitle: props.route.params.title,
            membersCount: props.route.params.membersCount,
        }
    }

    sectionHeaderClick = (section) => {
        let membersCategory = this.state.membersCategory
        if (section.hasMembers) {
            membersCategory[section.id - 1].expanded = !membersCategory[section.id - 1].expanded
        }
        this.setState({ membersCategory })
    }

    renderSectionHeader = (sectionData) => {
        let { section } = sectionData
        return section.hasMembers && section.data.length > 0 ? (
            <TouchableOpacity onPress={() => this.sectionHeaderClick(section)}>
                <View style={styles.recordContainer}>
                    <View>
                        <Image source={require("../assets/user.png")} resizeMode="contain" style={styles.profileImage} />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.sectionHeaderTitle}>
                            {section.title}
                        </Text>
                        <Text style={styles.sectionHeaderSubtitle}>
                            {section.data.length + " members"}
                        </Text>
                    </View>
                    <View>
                        <Image source={require("../assets/dropdown.png")} resizeMode="contain" style={styles.dropdownImage} />
                    </View>
                </View>
            </TouchableOpacity>) : !section.hasMembers && section.selected ? (
                (<View style={styles.recordContainer}>
                    <View>
                        <Image source={require("../assets/user.png")} resizeMode="contain" style={styles.profileImage} />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.sectionHeaderTitle}>
                            {section.title}
                        </Text>
                        <Text style={styles.sectionHeaderSubtitle}>
                            {section.post}
                        </Text>
                    </View>
                </View>
                )
            ) : (null)
    }

    renderItem = (sectionData) => {
        let { section, item } = sectionData
        return !section.expanded ?
            (null) :
            (<View style={styles.recordContainer1}>
                <View>
                    <Image source={require("../assets/user.png")} resizeMode="contain" style={styles.profileImage} />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.sectionHeaderTitle}>
                        {item.name}
                    </Text>
                    <Text style={styles.sectionHeaderSubtitle}>
                        {item.post}
                    </Text>
                </View>
            </View>
            )
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader
                    left={<Icon type="AntDesign" name="back" size={30} color="#FFF" />}
                    leftPress={() => {
                        this.props.navigation.goBack();
                    }}
                    body={this.state.announcementTitle}
                    bodySub={this.state.membersCount + " MEMBERS"}
                />
                {<SectionList
                    sections={this.state.membersCategory}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={(item, index) => index}
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    input: {
        margin: 15,
        height: 50,
        paddingHorizontal: 20,
        borderColor: '#e3e6ed',
        borderWidth: 1,
        color: '#000',
        fontSize: 17,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff"
    },
    sectionHeaderTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionHeaderSubtitle: {
        color: '#c9cfdb',
        fontSize: 14,
        fontWeight: 'bold',
    },
    sectionHeaderMembers: {
        backgroundColor: '#8fb1aa',
    },
    sectionHeaderSelected: {
        backgroundColor: 'green',
    },
    sectionHeaderUnselected: {
        backgroundColor: 'red',
    },
    recordContainer: {
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%'
    },
    recordContainer1: {
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 70,
        alignItems: 'center'
    },
    profileImage: {
        width: 50
    },
    innerContainer: {
        marginLeft: 10,
        width: '75%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemSelected: {
        backgroundColor: 'green'
    },
    itemNotSelected: {
        backgroundColor: 'red'
    },
    buttonStyle: {
        width: '90%',
        backgroundColor: '#6f52ed',
        alignSelf: 'center',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 20
    },
    totalCount: {
        alignSelf: 'flex-end',
        marginRight: 20
    },
    checkMarkView: {
        position: 'absolute',
        bottom: 28,
        right: 0,
        zIndex: 1,
        backgroundColor: '#6f52ed',
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    checkImage: {
        width: 14,
        height: 14,
    },
    dropdownImage: {
        height: 30,
        tintColor: '#6f52ed'
    }
})  