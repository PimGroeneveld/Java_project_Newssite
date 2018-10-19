package com.codeclan.SGNNapi.components;

import com.codeclan.SGNNapi.models.*;
import com.codeclan.SGNNapi.repositories.articles.ArticleRepository;
import com.codeclan.SGNNapi.repositories.categories.CategoryRepository;
import com.codeclan.SGNNapi.repositories.journalists.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.Month;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    JournalistRepository journalistRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Category generalCategory = new Category(CategoryName.GENERAL);
        categoryRepository.save(generalCategory);

        Category politicsCategory = new Category(CategoryName.POLITICS);
        categoryRepository.save(politicsCategory);

        Journalist journalist1 = new Journalist("Ally McGilloway");
        journalistRepository.save(journalist1);

        String headline1 = "Mundell concern over Brexit fish policy";
        String summary1 = "Scottish Secretary David Mundell has raised concerns with the prime minister over the timing of the UK's departure from the Common Fisheries Policy.";
        String fullStory1 = "Theresa May has said the Brexit transition period could be extended \"for a few months\" if needed.\n" +
                "A source close to Mr Mundell said he wants \"assurances any extension to the transition would not delay exit from CFP beyond the agreed date\".\n" +
                "Mr Mundell is understood to regard to the idea as \"vague\" and \"unexplored\".\n" +
                "The current plan is for a transition period of 21 months to smooth the path from Brexit to the UK and EU's future permanent relationship.\n" +
                "But with the two sides so far failing to reach a deal after an EU summit of all its leaders this week, Mrs May said this arrangement could be extended \"for a few months\", if needed.\n";
        LocalDateTime date1 = LocalDateTime.of(2018, Month.OCTOBER, 16, 10, 10, 30);
        String image1 = "/images/mondellgetty.jpg";
        Region region1 = Region.ENGLAND;
        Article article1 = new Article( headline1, summary1, fullStory1, date1, image1, region1);
        articleRepository.save(article1);

        article1.addCategory(generalCategory);
        article1.addCategory(politicsCategory);

        article1.addJournalist(journalist1);

        articleRepository.save(article1);
    }
}
