package com.example.demo.controller;

import com.example.demo.dto.Favouriterequest;
import com.example.demo.model.Favourite;
import com.example.demo.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@RestController
@RequestMapping("/api/v1/favourite")
@CrossOrigin("*")
public class FavouriteController {
    @Autowired
    FavouriteService favouriteService;

    @PostMapping("/create")
    public ResponseEntity<?> createFavourite(@RequestBody Favouriterequest request){
        boolean isFavouriteExist = favouriteService.isFavouriteExist(request);
        if(!isFavouriteExist) {
            Favourite favourite = favouriteService.createFavourite(request);
            return new ResponseEntity<>("The Favourite is created with id: '"+favourite.getFid()+"' successfully",HttpStatus.CREATED);
        }
        else {
            throw new NoSuchElementException();
        }
    }

    @GetMapping("/get/count")
    public ResponseEntity<?> getCount(){
        long count = favouriteService.countOfFavourites();
        return new ResponseEntity<>(count,HttpStatus.OK);
    }

    @GetMapping("/get/{fid}")
    public ResponseEntity<?> getFavouriteById(@PathVariable long fid){
        Favourite favourite = favouriteService.getFavouriteById(fid);
        return new ResponseEntity<>(favourite,HttpStatus.OK);
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllFavourites(){
        List<Favourite> favourites = favouriteService.getAllFavourites();
        return new ResponseEntity<>(favourites,HttpStatus.OK);
    }

    @GetMapping("get/byStory/{rid}")
    public ResponseEntity<?> getAllFavouriteByRecipe(@PathVariable long rid){
        List<Favourite> favourites = favouriteService.getFavouriteByRecipe(rid);
        return new ResponseEntity<>(favourites,HttpStatus.OK);
    }

    @GetMapping("get/byUser/{uid}")
    public ResponseEntity<?> getAllFavouriteByUser(@PathVariable long uid){
        List<Favourite> favourites = favouriteService.getFavouriteByUser(uid);
        return new ResponseEntity<>(favourites,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{fid}")
    public ResponseEntity<?> deleteFavouriteById(@PathVariable long fid){
        favouriteService.deleteFavouriteById(fid);
        return new ResponseEntity<>("The favourite with id "+fid+" was deleted successfully",HttpStatus.OK);
    }
}