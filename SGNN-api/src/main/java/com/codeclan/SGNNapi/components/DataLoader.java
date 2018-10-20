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

        // categories
        Category generalCategory = new Category(CategoryName.GENERAL);
        categoryRepository.save(generalCategory);

        Category politicsCategory = new Category(CategoryName.POLITICS);
        categoryRepository.save(politicsCategory);

        Category entertainementCategory = new Category(CategoryName.ENTERTAINMENT);
        categoryRepository.save(entertainementCategory);

        Category sportCategory = new Category(CategoryName.SPORTS);
        categoryRepository.save(sportCategory);

        Category healthCategory = new Category(CategoryName.HEALTH);
        categoryRepository.save(healthCategory);

        Category techCategory = new Category(CategoryName.TECH);
        categoryRepository.save(techCategory);

        Category educationCategory = new Category(CategoryName.EDUCATION);
        categoryRepository.save(educationCategory);

        Category economyCategory = new Category(CategoryName.ECONOMY);
        categoryRepository.save(economyCategory);


        //journalists
        Journalist journalist1 = new Journalist("Ally McGilloway", "Glasgow", "ali-g@sgnn.com", "+447678434567");
        journalistRepository.save(journalist1);

        Journalist journalist2 = new Journalist("James McJonas", "London", "james_mcjonas@sgnn.com", "+4473213443435");
        journalistRepository.save(journalist2);

        Journalist journalist3 = new Journalist("Clark Kent", "New York", "super-clark@sgnn.com", "+447670034560");
        journalistRepository.save(journalist3);

        Journalist journalist4 = new Journalist("Alice Johnson", "Belfast", "alice@sgnn.com", "+4479365787654");
        journalistRepository.save(journalist4);

        Journalist journalist5 = new Journalist("Brian Meechan", "Cardiff", "brian@sgnn.com", "+447678833455");
        journalistRepository.save(journalist5);

        Journalist journalist6 = new Journalist("Jared Lawthom", "Cardiff", "jared@sgnn.com", "+4478975786434");
        journalistRepository.save(journalist6);

        // Article 1
        String headline1 = "Mundell concern over Brexit fish policy";
        String summary1 = "Scottish Secretary David Mundell has raised concerns with the prime minister over the timing of the UK's departure from the Common Fisheries Policy.";
        String fullStory1 = "Theresa May has said the Brexit transition period could be extended \"for a few months\" if needed.\n" +
                "A source close to Mr Mundell said he wants \"assurances any extension to the transition would not delay exit from CFP beyond the agreed date\".\n" +
                "Mr Mundell is understood to regard to the idea as \"vague\" and \"unexplored\".\n" +
                "The current plan is for a transition period of 21 months to smooth the path from Brexit to the UK and EU's future permanent relationship.\n" +
                "But with the two sides so far failing to reach a deal after an EU summit of all its leaders this week, Mrs May said this arrangement could be extended \"for a few months\", if needed.\n";
        LocalDateTime date1 = LocalDateTime.of(2018, Month.OCTOBER, 16, 10, 10, 30);
        String image1 = "/images/mondellgetty.jpg";
        Region region1 = Region.SCOTLAND;
        Article article1 = new Article( headline1, summary1, fullStory1, date1, image1, region1);
        articleRepository.save(article1);

        article1.addCategory(generalCategory);
        article1.addCategory(politicsCategory);
        article1.addJournalist(journalist1);
        articleRepository.save(article1);

        //Article 2
        String headline2 = "Mad cow disease tests continue after Aberdeenshire discovery";
        String summary2 = "Test are continuing after the discovery of a case of BSE - so-called mad cow disease - at a farm in Aberdeenshire.";
        String fullStory2 = "Precautionary movement restrictions were introduced after the disease was found in a cow from a beef herd after it died in the Huntly area.\n" +
                "It is the first case of its kind in Scotland in a decade.\n" +
                "Scotland's Chief Veterinary Officer Sheila Voas said it could be \"months\" before the investigation yielded definitive results.\n" +
                "However, she stressed that the discovery of the BSE case showed the industry's detection system was working.\n" +
                "Some other animals from the herd are also being destroyed as a precaution and tested.";
        LocalDateTime date2 = LocalDateTime.now();
        String image2 = "/images/cows.jpg";
        Region region2 = Region.SCOTLAND;
        Article article2 = new Article( headline2, summary2, fullStory2, date2, image2, region2);
        articleRepository.save(article2);

        article2.addCategory(generalCategory);
        article2.addCategory(healthCategory);
        article2.addJournalist(journalist2);
        articleRepository.save(article2);

        //Article 3
        String headline3 = "Having my leg amputated will be like a Christmas gift.";
        String summary3 = "A woman having a leg amputated has said the operation \"will be like my birthday and Christmas rolled into one\".";
        String fullStory3 = "Lexi Chambers, a nurse from Exeter, said she suffers \"gut-wrenching pain\" in her foot.\n" +
                "The 40-year-old has had five operations to cure pain from \"hammer toes\" in her left leg and has had two toes removed.\n" +
                "But she has remained in constant pain and her request to have her leg amputated has now been approved by an NHS surgeon.\n" +
                "Ms Chambers, who had run half marathons and taken part in fitness competitions, said the pain in her foot started five years ago.\n" +
                "\"After running it would be a sharp pain with a dull ache for several hours,\" she said.";
        LocalDateTime date3 = LocalDateTime.of(2018, Month.OCTOBER, 18, 10, 17, 30);
        String image3 = "/images/legstill4.jpg";
        Region region3 = Region.ENGLAND;
        Article article3 = new Article( headline3, summary3, fullStory3, date3, image3, region3);
        articleRepository.save(article3);

        article3.addCategory(generalCategory);
        article3.addJournalist(journalist2);
        articleRepository.save(article3);

        // ARTICLE 4
        String headline4 = "Jose Mourinho: Would sacking Man Utd manager be justified?";
        String summary4 = "The Premier League weekend before the international break was dominated by talk Jose Mourinho was about to lose his job as Manchester United manager.";
        String fullStory4 = "According to one national newspaper, the Portuguese's time at the club would come to an end regardless of the result against Newcastle on 6 October.\n" +
                "Even after United staged a remarkable late comeback at Old Trafford to win 3-2 - having trailed 2-0 after 10 minutes - callers to BBC 606 were split over whether Mourinho should keep his job.\n" +
                "Afterwards, the Portuguese said he could cope with the \"manhunt\" against him and reiterated that the contract given to him by the club ran until 2020.";
        LocalDateTime date4 = LocalDateTime.of(2018, Month.OCTOBER, 17, 9, 17, 30);
        String image4 = "/images/Manchester-United.jpg";
        Region region4 = Region.ENGLAND;
        Article article4 = new Article( headline4, summary4, fullStory4, date4, image4, region4);
        articleRepository.save(article4);

        article4.addCategory(generalCategory);
        article4.addCategory(sportCategory);
        article4.addJournalist(journalist3);
        articleRepository.save(article4);

        // ARTICLE 5
        String headline5 = "Breast cancer: Bra shoppers faced with lesser-known signs";
        String summary5 = "Lifelike busts showing some of the signs of breast cancer have appeared in a chain of shops.";
        String fullStory5 = "The initiative, organised by the Public Health Agency (PHA), aims to educate women about signs beyond a lump in, or thickening of, the breast.\n" +
                "Research commissioned by the PHA showed women were less aware of signs like dimpling and discharge from the nipple.\n" +
                "Dr Louise Herron, Consultant in Public Health at the PHA, said: \"Any changes which are not normal for you should be investigated straight away by your GP.\n" +
                "\"Don’t be embarrassed or ignore any potential signs as the positive news is that nine out of 10 women in Northern Ireland survive breast cancer when it is caught and treated early.";
        LocalDateTime date5 = LocalDateTime.of(2018, Month.OCTOBER, 15, 9, 17, 30);
        String image5 = "/images/breast_cancer.jpeg";
        Region region5 = Region.NORTHERN_IRELAND;
        Article article5 = new Article( headline5, summary5, fullStory5, date5, image5, region5);
        articleRepository.save(article5);

        article5.addCategory(generalCategory);
        article5.addCategory(healthCategory);
        article5.addJournalist(journalist4);
        articleRepository.save(article5);

        //ARTICLE 6
        String headline6 = "A no-deal Brexit could affect food supplies and see traders bypass Great Britain, the ferry firm Stena Line has warned.";
        String summary6 = "There is \"very little readiness\" at ports and \"anxiety is high\", said Ian Hampton senior executive at the global ferry operator.";
        String fullStory6 = "Stena is the largest ferry operator in the Irish sea and owns three UK ports.\n" +
                "The government said it had proposed an ambitious future relationship with the EU to keep trade flowing.\n" +
                "Mr Hampton said there was a possibility Stena Line would reduce services to and from the UK as a result of Brexit.\n" +
                "\"We can't plan on the basis of what we don't know, so we're very anxious about the outcome,\" he told BBC Radio 4's Today Programme.\n" +
                "He warned traders could stop using Great Britain to get from Ireland and Northern Ireland to the rest of the EU, and instead sail direct to the continent.\n" +
                "A no-deal Brexit that created friction on the Northern Ireland border, or delays if extra checks were put in place between Great Britain and Northern Ireland to implement what's become known as a Brexit backstop, could have a significant impact on trade flows, he said.";
        LocalDateTime date6 = LocalDateTime.now();
        String image6 = "/images/brexit.jpg";
        Region region6 = Region.NORTHERN_IRELAND;
        Article article6 = new Article( headline6, summary6, fullStory6, date6, image6, region6);
        articleRepository.save(article6);

        article6.addCategory(generalCategory);
        article6.addCategory(politicsCategory);
        article6.addJournalist(journalist4);
        articleRepository.save(article6);

        //ARTICLE 7
        String headline7 = "£671m North Wales Growth Deal decision awaited";
        String summary7 = "A deal aimed at creating almost 5,500 jobs in north Wales could be at an end if it does not get the backing of the UK government in this month's Budget.";
        String fullStory7 = "That is according to the body driving the £671m bid, the North Wales Economic Ambition Board (NWEAB).\n" +
                "The UK government said \"more work needs to be done\" on the North Wales Growth Deal but it \"remains committed\".\n" +
                "The NWEAB and employers' group, North Wales Mersey Dee Business Council, said they were \"confident\" about the Budget.\n" +
                "The North Wales Growth Deal would bring £671m of investment to the region.\n" +
                "Half of it would come jointly from the UK and Welsh governments, with £219m from organisations such as universities and colleges.\n" +
                "Businesses are being expected to put in £109m upfront as part of the agreement.\n" +
                "However, it is argued that the private sector would invest £3.1bn in the long-term as a direct result of the growth deal.";
        LocalDateTime date7 = LocalDateTime.of(2018, Month.OCTOBER, 13, 9, 17, 30);
        String image7 = "/images/nuclear_plant.jpg";
        Region region7 = Region.WALES;
        Article article7 = new Article( headline7, summary7, fullStory7, date7, image7, region7);
        articleRepository.save(article7);

        article7.addCategory(generalCategory);
        article7.addCategory(economyCategory);
        article7.addJournalist(journalist5);
        article7.addJournalist(journalist6);
        articleRepository.save(article7);

        // ARTICLE 8
        String headline8 = "Santa tickets: ‘Christmas Eve sold out in 10 minutes’";
        String summary8 = "With more than two months still to go until Christmas, tickets to see Santa have already sold out at some venues.";
        String fullStory8 = "Parents who have had to buy tickets as early as September have compared it to getting a ticket to Glastonbury.\n" +
                "Pugh's Garden Village in Radyr, Cardiff, sold out all weekends in December after being on sale for just over an hour.\n" +
                "Its senior manager Kara Pugh, said: \"Our tickets for Christmas Eve were gone in 10 minutes.\"\n" +
                "She added: \"Sales seem to be getting quicker each year, especially within the last five years.\"";
        LocalDateTime date8 = LocalDateTime.of(2018, Month.OCTOBER, 14, 9, 17, 30);
        String image8 = "/images/xmassellout.png";
        Region region8 = Region.WALES;
        Article article8 = new Article( headline8, summary8, fullStory8, date8, image8, region8);
        articleRepository.save(article8);

        article8.addCategory(generalCategory);
        article8.addCategory(entertainementCategory);
        article8.addJournalist(journalist6);
        articleRepository.save(article8);


    }
}
