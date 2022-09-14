FROM openjdk:8-jdk


ARG JAR_FILE=lib/theground.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
