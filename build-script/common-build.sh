echo "🔧 Fixing build issues..."

cd android && ./gradlew clean 
 
 echo "✅ Gradle cleaned"

./gradlew assemblerelease

echo "✅ Build completed"



