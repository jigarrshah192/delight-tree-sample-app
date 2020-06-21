import React from "react"
import { Alert, View, Image, Text, SectionList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import AppHeader from '../components/AppHeader'

export default class AnnouncementView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            totalSelected: 0,
            searchText: '',
            announcementTitle: '',
            membersCategory: [
                { id: 1, title: 'Franchise Managers', hasMembers: true, selectedCount: 0, expanded: true, data: [{ id: 1, name: 'Jaheim Wolf', post: 'Manager', selected: false }, { id: 2, name: 'Randall Fox', post: 'Manager', selected: false }, { id: 3, name: 'Ivor Lopez', post: 'Manager', selected: false }, { id: 4, name: 'Samson Zuniga', post: 'Manager', selected: false }, { id: 5, name: 'Adam Redmond', post: 'Manager', selected: false }] },
                { id: 2, title: 'Operations Team', hasMembers: true, selectedCount: 0, expanded: true, data: [{ id: 1, name: 'Mandy Workman', post: 'Manager', selected: false }, { id: 2, name: 'Lubna Silva', post: 'Manager', selected: false }, { id: 3, name: 'Chardonnay Nguyen', post: 'Manager', selected: false }, { id: 4, name: 'Samson Zuniga', post: 'Manager', selected: false }, { id: 5, name: 'Adam Redmond', post: 'Manager', selected: false }] },
                { id: 3, title: 'Marketing Team', hasMembers: true, selectedCount: 0, expanded: true, data: [{ id: 1, name: 'Findlay Needham', post: 'Manager', selected: false }, { id: 2, name: 'Lubna Silva', post: 'Manager', selected: false }, { id: 3, name: 'Jasleen Davenport', post: 'Manager', selected: false }, { id: 4, name: 'Subhaan Ashton', post: 'Manager', selected: false }, { id: 5, name: 'Adam Redmond', post: 'Manager', selected: false }] },
                { id: 4, title: 'Uma Myers', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 5, title: 'Imogen Gardner', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 6, title: 'Aayat Burke', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 7, title: 'Aminah Mckenzie', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 8, title: 'Carmel Pham', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 9, title: 'Jocelyn Graves', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 10, title: 'Walter Craf', post: 'Manager', hasMembers: false, selected: false, data: [] },
            ],
            selectedMembersCategory: [
                { id: 1, title: 'Franchise Managers', hasMembers: true, expanded: true, data: [] },
                { id: 2, title: 'Operations Team', hasMembers: true, expanded: true, data: [] },
                { id: 3, title: 'Marketing Team', hasMembers: true, expanded: true, data: [] },
                { id: 4, title: 'Uma Myers', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 5, title: 'Imogen Gardner', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 6, title: 'Aayat Burke', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 7, title: 'Aminah Mckenzie', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 8, title: 'Carmel Pham', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 9, title: 'Jocelyn Graves', post: 'Manager', hasMembers: false, selected: false, data: [] },
                { id: 10, title: 'Walter Craf', post: 'Manager', hasMembers: false, selected: false, data: [] },
            ]
        }
    }

    handleTitle = (title) => {
        this.setState({ announcementTitle: title })
    }

    handleSearch = (searchText) => {
        this.setState({ searchText })
    }

    memberSelected = (item) => {
        let membersCategory = this.state.membersCategory
        let selectedMembersCategory = this.state.selectedMembersCategory
        let totalSelected = this.state.totalSelected
        for (let index = 0; index < membersCategory.length; index++) {
            let indexFound = membersCategory[index].data.findIndex(member => member.name === item.name)
            if (indexFound > -1) {
                if (membersCategory[index].data[indexFound].selected) {
                    membersCategory[index].selectedCount--
                    totalSelected--
                    let selectedArrayIndex = selectedMembersCategory[index].data.findIndex(member => member.name === item.name)
                    selectedMembersCategory[index].data.splice(selectedArrayIndex, 1)
                }
                else {
                    membersCategory[index].selectedCount++
                    totalSelected++
                    selectedMembersCategory[index].data.push({ name: item.name, post: item.post, selected: false })
                }
                membersCategory[index].data[indexFound].selected = !membersCategory[index].data[indexFound].selected
            }
        }
        this.setState({ membersCategory, selectedMembersCategory, totalSelected })
    }

    sectionHeaderClick = (section) => {
        let membersCategory = this.state.membersCategory
        let selectedMembersCategory = this.state.selectedMembersCategory
        let totalSelected = this.state.totalSelected
        if (section.hasMembers) {
            membersCategory[section.id - 1].expanded = !membersCategory[section.id - 1].expanded
        }
        else {
            if (membersCategory[section.id - 1].selected) {
                totalSelected--
            }
            else {
                totalSelected++
            }
            membersCategory[section.id - 1].selected = !membersCategory[section.id - 1].selected
            selectedMembersCategory[section.id - 1].selected = !selectedMembersCategory[section.id - 1].selected
        }
        this.setState({ membersCategory, selectedMembersCategory, totalSelected })
    }

    renderSectionHeader = (sectionData) => {
        let { section } = sectionData
        return section.hasMembers ? (
            <TouchableOpacity onPress={() => this.sectionHeaderClick(section)}>
                <View style={styles.recordContainer}>
                    <View>
                        {section.selectedCount > 0 ? <View style={styles.checkMarkView}>
                            <Image source={require("../assets/check.png")} resizeMode="contain" style={styles.checkImage} />
                        </View> : null}
                        <Image source={require("../assets/user.png")} resizeMode="contain" style={styles.profileImage} />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.sectionHeaderTitle}>
                            {section.title}
                        </Text>
                        <Text style={styles.sectionHeaderSubtitle}>
                            {section.selectedCount + " / " + section.data.length + " members"}
                        </Text>
                    </View>
                    <View>
                        <Image source={require("../assets/dropdown.png")} resizeMode="contain" style={styles.dropdownImage} />
                    </View>
                </View>
            </TouchableOpacity>) : (
                this.state.searchText === '' || section.title.indexOf(this.state.searchText) > -1 ?
                    (<TouchableOpacity onPress={() => this.sectionHeaderClick(section)}>
                        <View style={styles.recordContainer}>
                            <View>
                                {section.selected ? <View style={styles.checkMarkView}>
                                    <Image source={require("../assets/check.png")} resizeMode="contain" style={styles.checkImage} />
                                </View> : null}
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
                    </TouchableOpacity>)
                    :
                    (null)
            )
    }

    renderItem = (sectionData) => {
        let { section, item } = sectionData
        return !section.expanded ?
            (null) :
            (this.state.searchText === '' || item.name.indexOf(this.state.searchText) > -1 ?
                (<TouchableOpacity onPress={() => this.memberSelected(item)} >
                    <View style={styles.recordContainer1}>
                        <View>
                            {item.selected ? <View style={styles.checkMarkView}>
                                <Image source={require("../assets/check.png")} resizeMode="contain" style={styles.checkImage} />
                            </View> : null}
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
                </ TouchableOpacity>) : (null))
    }

    traverse = () => {
        if (this.state.announcementTitle === '') {
            Alert.alert(
                '',
                'Please provide an announcement title.',
            )
        }
        else if (this.state.totalSelected === 0) {
            Alert.alert(
                '',
                'Please select atleast one member to proceed.',
            )
        }
        else {
            this.props.navigation.navigate('AnnouncementListView', { selectedMembersCategory: this.state.selectedMembersCategory, title: this.state.announcementTitle, membersCount: this.state.totalSelected })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader
                    body={"Create Announcement"}
                />
                <TextInput style={styles.input}
                    value={this.state.announcementTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Title"
                    placeholderTextColor="#d7dbe4"
                    autoCapitalize="none"
                    onChangeText={this.handleTitle}
                />
                <TextInput style={styles.input}
                    value={this.state.searchText}
                    underlineColorAndroid="transparent"
                    placeholder="Add People"
                    placeholderTextColor="#d7dbe4"
                    autoCapitalize="none"
                    onChangeText={this.handleSearch}
                />
                <Text style={styles.totalCount}>{this.state.totalSelected + " / 23"}</Text>
                <SectionList
                    sections={this.state.membersCategory}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={(item, index) => index}
                />
                <TouchableOpacity onPress={this.traverse}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>
                            Next
                        </Text>
                    </View>
                </TouchableOpacity>
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