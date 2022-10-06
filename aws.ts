export const bucketPoicy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::221004-anhntaws-bucket/*"
        }
    ]
} 

export const AWS = {
    ACCESS_KEY: "AKIAQ22V465HKLBLMM4X",
    SECRET_KEY: "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"
}