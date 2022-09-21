package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.ImageDto;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@SuppressWarnings("FieldCanBeLocal")
@Service
public class ImageService {
    private final String IMAGE_PATH = "";

    public ImageDto downloadFile(String fileName) {
        System.out.println("Service started");
        ImageDto imageDto = new ImageDto();
        if (fileName == null) {
            imageDto.setResult(ImageDto.ImageResult.BAD_REQUEST);
            return imageDto;
        }
        String filePath = IMAGE_PATH + fileName;
        Path path = Paths.get(filePath);
        File file = new File(filePath);
        if (!file.exists()) {
            System.out.println("No file such as : " + filePath);
            imageDto.setResult(ImageDto.ImageResult.FILE_NOT_FOUND);
            return imageDto;
        }
        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1);
        String contentType = "image/" + fileExt;
        try {
            byte[] content = Files.readAllBytes(path);
            imageDto.setFile(new MockMultipartFile(fileName, fileName, contentType, content));
        } catch (IOException e) {
            imageDto.setResult(ImageDto.ImageResult.SERVER_ERROR);
            return imageDto;
        }
        imageDto.setResult(ImageDto.ImageResult.SUCCESS);
        return imageDto;
    }
}
