//RSS Feeds
	$(function() {
	        describe('RSS Feeds', function() {
	                it('Defined!', function() {
	                        expect(allFeeds).toBeDefined();
	                        //checking that length of allfeeds array is not equal to zero
	                        expect(allFeeds.length).not.toBe(0);
	                });

	                it('Congrats! Url is present', function() {
	                        //loop to iterate over all Feeds present in allFeeds array
	                        for (i = 0; i < allFeeds.length; i++) {
	                                expect(allFeeds[i].url).toBeDefined();
	                                expect(allFeeds[i].url.length).not.toBe(0);
	                                //checking wether the url is defined or not and it should not be equal to 0;
	                                expect(allFeeds[i].url).not.toBe(null);
	                        }
	                });

	                it('name is also defined ', function() {
	                        for (j = 0; j < allFeeds.length; j++) {
	                                //checking for name to be defined
	                                expect(allFeeds[j].name).toBeDefined();
	                                //checking that name is not equal to zero
	                                expect(allFeeds[j].name.length).not.toBe(0);
	                                //checking that name is not null
	                                expect(allFeeds[j].name).not.toBe(null);
	                        }
	                });
	        });

	        //menu
	        describe('The menu', function() {
	                it('menu is hidden by default ', function() {
	                        //checking wether class menu is hidden or not
	                        expect($('body').hasClass("menu-hidden")).toBe(true);
	                });
	                it('menu toggles visibilty when clicked', function() {
	                        $(".menu-icon-link").click();
	                        //when click on menu icon menu should open
	                        expect($('body').hasClass("menu-hidden")).toBe(false);
	                        $(".menu-icon-link").click();
	                        //when again click on menu icon it shoul close
	                        expect($('body').hasClass("menu-hidden")).toBe(true);
	                });
	        });
	        //describing initial Enteries
	        describe('Initial Entries', function() {
	                beforeEach(function(done) {
	                        //loading RSSfeeds
	                        loadFeed(0, function() {
	                                done();
	                        });
	                });

	                it(' has minimum 1 entry', function(done) {
	                        //check wether length of feed to be greater than 0 
	                        expect($('.feed .entry').length).toBeGreaterThan(0);
	                        done();
	                });
	        });

	        //New Feed Selection
	        describe('New Feed Selection', function() {
	                var previous_feed;
	                var nextfeed;

	                beforeEach(function(done) {
	                        loadFeed(0, function() {
	                                //on load fetching feed
	                                previous_feed = $('.feed').html();
	                                //use nested loops to be asynchronous.
	                                loadFeed(1, function() {
	                                        // fetching feed on reload
	                                        nextfeed = $('.feed').html();
	                                        done();
	                                });
	                        });
	                });

	                it('nextFeed is not equal to previousfeed', function() {
	                        // old and new feed is not same
	                        expect(nextfeed).not.toEqual(previous_feed);
	                });
                
	});
	});