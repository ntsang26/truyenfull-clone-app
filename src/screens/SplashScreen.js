import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import React from "react"

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/splash_bg.avif")}
				resizeMode="cover"
				style={styles.imageBg}
			>
				<Image
					source={require("../../assets/book.avif")}
					style={styles.image}
				/>
			</ImageBackground>
		</View>
	)
}

export default SplashScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBg: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
	},
})
