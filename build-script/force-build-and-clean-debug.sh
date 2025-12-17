echo "🔧 Fixing build issues..."

rm -rf node_modules
rm -f yarn.lock
rm -f package-lock.json
rm -rf .expo
rm -rf android

echo "Removed all build artifacts"

echo "Rebuilding..."

yarn

echo "✅ Deffendency Installed"

npx expo prebuild --platform android

echo "✅ Prebuild completed"

cd android && ./gradlew clean && ./gradlew assembleDebug

echo "✅ Build completed"