package com.example.demo.service;

import com.example.demo.dto.Favouriterequest;
import com.example.demo.model.Favourite;
import com.example.demo.repository.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FavouriteService {
    @Autowired
    FavouriteRepository favouriteRepository;

    @Autowired
    UserService userService;

    @Autowired
    StoryService storyService;

    public boolean isFavouriteExist(long fid) {
        return favouriteRepository.existsById(fid);
    }

    public Favourite toFavourite(Favouriterequest request) {
        var favourite = Favourite.builder()
                .storymodel(storyService.getStoriesById(request.getStoryid()).get())
                .user(userService.getUserById(request.getUid()).get())
                .build();
        return favourite;
    }


    public boolean isFavouriteExist(Favouriterequest request) {
        boolean user = favouriteRepository.existsByUser(userService.getUserById(request.getUid()).get());
        boolean recipe = favouriteRepository.existsByStorymodel(storyService.getStoriesById(request.getStoryid()).get());
        return (user && recipe);
    }

    public Favourite createFavourite(Favouriterequest request) {
        return favouriteRepository.save(toFavourite(request));
    }

    public Favourite getFavouriteById(long fid) {
        return favouriteRepository.findById(fid).get();
    }

    public List<Favourite> getAllFavourites(){
        return favouriteRepository.findAll();
    }

    public List<Favourite> getFavouriteByRecipe(long storyId){
        return favouriteRepository.findByStorymodel(storyService.getStoriesById(storyId).get());
    }

    public List<Favourite> getFavouriteByUser(long uid){
        return favouriteRepository.findByUser(userService.getUserById(uid).get());
    }

    public List<Favourite> getAllFavouriteById(List<Long> favouriteIds){
        return favouriteRepository.findAllById(favouriteIds);
    }

    public void deleteFavouriteById(long fid) {
        favouriteRepository.deleteById(fid);
    }

    public long countOfFavourites() {
        return favouriteRepository.count();
    }
}