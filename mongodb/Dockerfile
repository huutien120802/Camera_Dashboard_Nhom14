FROM mongo:latest

COPY ./dump_data /dump_data

CMD mongoimport --host mongo_db --db test --collection users --type json --file /dump_data/users.json --jsonArray \
    && mongoimport --host mongo_db --db test --collection cameras --type json --file /dump_data/cameras.json --jsonArray \
    && mongoimport --host mongo_db --db test --collection locations --type json --file /dump_data/locations.json --jsonArray \
    && mongoimport --host mongo_db --db test --collection statistics --type json --file /dump_data/statistics.json --jsonArray \
    && mongoimport --host mongo_db --db test --collection videos --type json --file /dump_data/videos.json --jsonArray \
    && mongoimport --host mongo_db --db test --collection warnings --type json --file /dump_data/warnings.json --jsonArray
