package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ImageDto {
    public enum ImageResult {
        SUCCESS, BAD_REQUEST, SERVER_ERROR, FILE_NOT_FOUND,
    }
    private String downloadUrl;
    private ImageResult result;
    private MultipartFile file;
    private byte[] bytes;
}
