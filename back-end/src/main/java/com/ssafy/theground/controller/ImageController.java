package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.ImageDto;
import com.ssafy.theground.service.ImageService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController("/download")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{file_name}")
    public ResponseEntity<byte[]> imageGet(@PathVariable("file_name") String fileName) {
        ImageDto imageDto = this.imageService.downloadFile(fileName);
        HttpHeaders headers = new HttpHeaders();
        switch (imageDto.getResult()) {
            case SUCCESS:
                try {
                    headers.add("Content-Type", imageDto.getFile().getContentType());
                    return new ResponseEntity<>(imageDto.getFile().getBytes(), headers, HttpStatus.OK);
                } catch (IOException e) {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            case FILE_NOT_FOUND:
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            case BAD_REQUEST:
            default:
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
