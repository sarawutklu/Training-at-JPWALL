package com.example.demo.share;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class ModelMapperService {

	  private static ModelMapper modelMapper = new ModelMapper();


	    private ModelMapperService() {


	    }
	    
	   public static <S, T> List<T> mapList(List<S> source, Class<T> targetClass) {

	        return source
	                .stream()
	                .map(element -> modelMapper.map(element, targetClass))
	                .collect(Collectors.toList());
	    }
	
}
