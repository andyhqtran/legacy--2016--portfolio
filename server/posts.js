if (Posts.find().count() === 0) {
  Posts.insert({
    theme: 'Maverick',
    title: 'Maverick - App & Software Landing Page',
    category: '0',
    content: '...',
    views: '0',
    create_date: new Date()
  });
}