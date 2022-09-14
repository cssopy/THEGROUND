FROM openjdk:8-jdk


ARG JAR_FILE=lib/back-end.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
