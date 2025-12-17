echo "🔧 Fixing build issues..."

rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -rf android

echo "Removed all build artifacts"

echo "Rebuilding..."

yarn 

echo "✅ Deffendency Installed"

npx expo prebuild --platform android

echo "✅ Prebuild completed"

cd android && ./gradlew clean && ./gradlew assemblerelease

echo "✅ Build completed"