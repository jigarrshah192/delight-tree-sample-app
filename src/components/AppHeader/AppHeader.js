import React, { Component } from 'react';
import { Header, Left, Right, Button, } from 'native-base';
import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AppHeader extends Component {
    render() {
        return (<>
            <StatusBar
                backgroundColor={"#6f52ed"}
                barStyle="light-content"
            />

            <Header androidStatusBarColor={"#6f52ed"} style={[styles.headerStyle]} >
                <Left style={styles.headerIconsContainer}>
                    {
                        this.props.left &&
                        <Button transparent onPress={this.props.leftPress}>
                            {this.props.left}
                        </Button>
                    }
                </Left>
                <View style={styles.headerBodyStyle}>
                    <Text style={styles.headerTextStyle}>{this.props.body}</Text>
                    {this.props.bodySub && <Text style={styles.headerSubStyle}>{this.props.bodySub}</Text>}
                </View>
                <Right style={styles.headerIconsContainer}>
                    {this.props.showSecondary && this.props.rightSecondary &&
                        <Button transparent onPress={this.props.rightSecondaryPress}>
                            {this.props.rightSecondary}
                        </Button>
                    }
                    {this.props.right && this.props.rightPress &&
                        <TouchableOpacity onPress={this.props.rightPress} >
                            {this.props.right}
                        </TouchableOpacity>
                    }
                    {this.props.right &&
                        this.props.right
                    }
                </Right>
            </Header>

        </>
        );
    }
}